import { useEffect, useState } from "react";

const GalleryButton = () => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("");
        const data = await res.json();
        setData((pre) => [...pre, ...data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [offset]);

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.srollTop + window.innerHeight;
      if (currentHeight + 1 >= scrollHeight) {
        setOffset(offset + 5);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, [offset]);
  return (
    <div className="gallerybutton">
      <div className="product-list">
        {data &&
          data.map((product) => (
            <div className="product-item" key={product.id}>
              <img src={product.images[0]} alt="pictures" />
              <div className="product-info">
                <h4 className="product-name">{product.name}</h4>
                <p className="product-title">{product.title}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GalleryButton;
