import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://skilledev.com/wp-content/uploads/2022/08/image.png"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">À propos de moi</h1>
        <p className="a-sub">
        Je suis un développeur passionné et déterminé à créer des solutions digitales exceptionnelles pour mes clients.
        </p>
        <p className="a-desc">
En travaillant avec moi, vous bénéficierez d'une communication claire et ouverte. Je m'efforce de comprendre les objectifs et les besoins de chaque client, afin de vous délivrer un résultat qui répond parfaitement à leurs attentes. Je suis également un excellent communicateur, ce qui me permet de travailler en étroite collaboration avec vous pour vous garantir un résultat final cohérent et professionnel.
Si vous êtes à la recherche d'un développeur compétent et fiable pour vous aider à réaliser votre projet digital, n'hésitez pas à me contacter. Je suis convaincu que mon expertise et ma passion pour la technologie permettront de créer un produit qui dépasse vos attentes.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2023</h4>
            <p className="a-award-desc">
             
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;