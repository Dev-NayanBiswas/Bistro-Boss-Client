function imageUploader(path) {
  return new URL(`../src/assets/home/${path}`, import.meta.url).href
}
export default imageUploader