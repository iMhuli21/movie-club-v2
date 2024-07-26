export function setHeroBg(imageUrl?: string) {
  return {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../public/spiderman_no_way_home-23.jpg')`,
    position: 'relative',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };
}
