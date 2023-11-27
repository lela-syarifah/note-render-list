import Button from "../component/Button";
import Card from "../component/Card";
// import imgWelcome from "../welcome.png";
import harimau from "../assets/images/harimau.jpg"
import singa from "../assets/images/singa.webp"
import cheetah from "../assets/images/cheetah.jpg"
import blackpanther from "../assets/images/blackpanther.jpg"
import "../styles/home.css"
import React, { useState } from "react";

export default function Home() {
  
  const [count, setCount] = useState(0)

  const handleClick = () => {
      setCount(count + 1);
  }

  // const user = {
  //   name: "Layla",
  //   image: imgWelcome,
  //   imageSize: "90px",
  // };

  // const colors = [
  //   { id: 1, title: "red", isLight: true},
  //   { id: 2, title: "green", isLight: true},
  //   { id: 3, title: "blue", isLight: false},
  //   { id: 4, title: "black", isLight: false},
  //   { id: 5, title: "white",  isLight: true},
  // ];

  return (
    <div className="wrapper">
    <div className="dynamic-comp">
      <Card image={harimau} title="Harimau Sumatera" description="Harimau sumatera (Panthera tigris sumatrae) adalah subspesies harimau yang habitat aslinya di pulau Sumatera. memiliki ciri kulit loreng coklat kekuning-kuningan dengan garis-garis hitam vertikal dari kepala sampai ekor." />
      <Card image={singa} title="Singa" description="Singa (Sanskerta: Siṃha, atau nama ilmiahnya Panthera leo) adalah spesies hewan dari keluarga felidae atau keluarga kucing. Singa berada di benua Afrika dan sebagian di wilayah India. Singa merupakan hewan yang hidup berkelompok. Biasanya terdiri dari seekor jantan & banyak betina." />
      <Card image={cheetah} title="Cheetah" description="Cheetah adalah hewan yang sangat cepat, yang bisa berlari hingga 96 km per jam hanya dalam tiga detik. Saat berlari, kaki cheetah bisa melangkah sepanjang 3,6 hingga 4,8 m. Bahkan, seekor cheetah yang berlari dengan kecepatan penuh dapat memiliki langkah sepanjang 6,7 m." />
      <Card image={blackpanther} title="Black Panther" description="Black Panther adalah kucing besar yang berasal dari keluarga kucing besar . Mereka memiliki tubuh yang kuat dan fleksibel, ekor panjang yang memberikan keseimbangan yang baik, dan mereka adalah pemburu yang kuat dengan gigi dan cakar yang tajam. Bertentangan dengan kepercayaan umum, macan kumbang bukanlah spesies kucing individual." />
    </div>
      {/* <div>
        <img
          src={user.image}
          alt={"img-" + user.name}
          className="img-welcome"
          style={{ width: user.imageSize, height: user.imageSize }}
        />
      </div>
      <div className="wrap">
        <h1>Selamat Datang {user.name} di Aplikasi React Saya</h1>
      </div>
      <div className="lists" style={{ border: "2px solid red" }}>
        <ul>
          {colors.map((value, idx) => {
            return <li key={idx} style={{color: value.title}}>{value.title}</li>;
          })}
        </ul>
      </div>
      <br />
      <table border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Color Name</th>
          </tr>
        </thead>
        <tbody>
          {colors.map((val) => (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.title}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <div>
        <Button count={count} handleClick={handleClick} />
        <Button count={count} handleClick={handleClick} />
      </div>
    </div>
  );
}
