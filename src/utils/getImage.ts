export default function getImage(size: number = 400, imageId: string) {
  return `https://www.artic.edu/iiif/2/${imageId}/full/${size},/0/default.jpg`;
}
