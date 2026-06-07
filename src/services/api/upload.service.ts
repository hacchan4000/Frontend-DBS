import { ApiService } from './api.service';

export const handleUpload = async (
  file: File
) => {

  const formData = new FormData();

  formData.append(
    'file',
    file
  );

  const result = await ApiService({
    url:'predict',
    method:'POST',
    body:formData,
    authorization:false
  });

  return result;
};