import image from './assets/image.png'
function App() {
  return (
    <>
      <style>{`
        body {
          background-color: #f4f6f8;
          font-family: Arial, sans-serif;
        }

        .hello-container {
          text-align: center;
          margin-top: 150px;
          background: white;
          padding: 30px;
          width: 350px;
          margin-left: auto;
          margin-right: auto;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        h1 {
          color: #4f46e5;
        }

        p {
          margin-top: 10px;
          font-size: 18px;
          color: #555;
        }
          .welcome-img {
  width: 350px;
  margin-bottom: 15px;
}

      `}</style>

      <div className="hello-container">
        <img src={image} alt="Welcome" className="welcome-img" />

        <h1>Hello, I am Nithya 👋</h1>
        <p>Welcome to my first React application!</p>
      </div>
    </>
  );
}

export default App;
