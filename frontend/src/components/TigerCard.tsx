// ? for some reason no live stream is working with embedded?
const TigerCard = () => {
  return (
    <iframe
      width="560"
      height="315"
      src="https://www.sdzsafaripark.org/tiger-cam"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default TigerCard;
