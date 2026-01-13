import { Injectable, signal } from '@angular/core';
import * as mobilenet from '@tensorflow-models/mobilenet';
import { Prediction } from './models/prediction.interface';

@Injectable({
  providedIn: 'root'
})
export class ObjectDetectionService {
  isPredicting = signal(false);

  private readonly _model = signal<mobilenet.MobileNet | null>(null);


  async loadModel() {
    try {
      this.isPredicting.set(true);
      const loadedModel = await mobilenet.load({ version: 2, alpha: 1.0 });
      this._model.set(loadedModel);
      this.isPredicting.set(false);

    } catch (error) {
      console.log('Error loading model', error);
    }
  }

  async predict(image: HTMLImageElement): Promise<Prediction[]> {

    this.isPredicting.set(true);
    try {
      await new Promise((resolve) => (image.onload = resolve))
      return await this._model()?.classify(image) ?? [];

    } catch (error) {
      console.log(error);
      this.isPredicting.set(false);
      return [];
    }

  }

}
