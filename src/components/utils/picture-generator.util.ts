const pictures = [
  "https://www.blacksbricks.de/images/product_images/original_images/stardestrrevsl1.jpg",
  "https://64.media.tumblr.com/cdd22d181a0ec1c9a0788bb44e38c5fe/tumblr_ohcuovgfma1ujrjg9o1_1280.jpg",
  "https://commons.wikimedia.org/wiki/File:Emblem_of_the_First_Galactic_Empire.svg",
  "https://commons.wikimedia.org/wiki/File:Rebel_Alliance_logo.svg",
];

function randomNumber(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export function generatePicture(): string {
  const index = randomNumber(0, 3);
  return pictures[index]?.length ? pictures[index] : "";
}
