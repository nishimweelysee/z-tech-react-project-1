import "./styles.css";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import Footer from "./components/footer";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    async function fetchData() {
      let response = await fetch("https://restcountries.com/v3.1/all");
      let data = await response.json();
      console.log(data);
    }
    fetchData();
  });
  return (
    <div className="App">
      <NavBar />
      <SideBar>
        <div className="p-10">
          <h1>Hello Nishimwe Elysee</h1>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </SideBar>
      <Footer />
    </div>
  );
}
