import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
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
  private readonly _objectDetector = inject(ObjectDetectionService);

  predictions = signal<Prediction[]>([]);
  file = signal<File | undefined>(undefined);
  isPredicting = this._objectDetector.isPredicting;


  handleImageUpload(file: File): void { }

  predict(): void { }

}
