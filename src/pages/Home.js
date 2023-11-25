import Button from "../component/Button";
import imgWelcome from "../welcome.png";
export default function Home() {
  const user = {
    name: "Layla",
    image: imgWelcome,
    imageSize: "90px",
  };
  const colors = [
    { id: 1, title: "red", isLight: true},
    { id: 2, title: "green", isLight: true},
    { id: 3, title: "blue", isLight: false},
    { id: 4, title: "black", isLight: false},
    { id: 5, title: "white",  isLight: true},
  ];
  return (
    <>
      <div>
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
      </table>
      <div>
        <Button />
      </div>
    </>
  );
}
