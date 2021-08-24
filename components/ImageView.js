import Image from "next/image";


const normalizeSrc = (src) => {
  return src[0] === "/" ? src.slice(1) : src;
};


const cloudflareLoader = ({ src, width, quality }) => {
  const params = [`width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(",");
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
};


export default function ImageView(props){
  return (
    <Image
      loader={cloudflareLoader}
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  );
};