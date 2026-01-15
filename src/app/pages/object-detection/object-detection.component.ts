import { ChangeDetectionStrategy, Component, effect, inject, resource, signal } from '@angular/core';
import { PredictionListComponent } from '@pages/object-detection/prediction-list/prediction-list.component';
import { UploadCardComponent } from './upload-card/upload-card.component';
import { Prediction } from './models/prediction.interface';
import { ObjectDetectionService } from './object-detection.service';

@Component({
  selector: 'app-object-detection',
  imports: [UploadCardComponent, PredictionListComponent],
  templateUrl: './object-detection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectDetectionComponent {
  private readonly _objectDetectionService = inject(ObjectDetectionService);

  predictions = signal<Prediction[]>([]);
  file = signal<File | undefined>(undefined);
  isPredicting = this._objectDetectionService.isPredicting;
  previewSrc = signal<string | null>(null);
  modelRx = resource({
    loader: () => this._objectDetectionService.loadModel(),
  });


  constructor(){
    effect(() => {
      console.log('ModelRx', this.modelRx);
      
    })
  }

  handleImageUpload(file: File): void {
    this.file.set(file);
    this.previewSrc.set(URL.createObjectURL(file));
    this.predictions.set([]);
  }

  async predict(): Promise<void> {
    const src = this.previewSrc();

    if(!src) return;

    const img = new Image();
    img.src = src;

    const predictions = await this._objectDetectionService.predict(img);

    this.predictions.set(predictions);

  }

}
