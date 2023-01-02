export interface IGenerateImage {
  id: string;
  message: string;
  created: number;
  apiVersion: string;
  modelOutputs: IModelOutput[];
}

export interface IModelOutput {
  image_base64: string;
}
