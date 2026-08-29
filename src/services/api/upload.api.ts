import { httpClient } from "./client";

export interface UploadResponse {
  url: string;
  publicId?: string;
  originalName: string;
  mimeType: string;
  size: number;
}

export const uploadApi = {
  // Tải ảnh lên máy chủ (Cloudinary / S3 qua NestJS)
  uploadImage(file: File): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", "image");

    return httpClient.upload<UploadResponse>("/uploads/image", formData);
  },

  // Tải nhạc nền lên máy chủ (.mp3, .m4a)
  uploadAudio(file: File): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", "audio");

    return httpClient.upload<UploadResponse>("/uploads/audio", formData);
  },
};
