let name = "Divyanshu";


const App =  () => {
  return (
    <div >
      <nav className="flex items-center space-x-10 bg-red-400 p-2 ">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Price</li>
      </nav>
    <div className="container bg-green-200">
      <h1 className="font-bold text-red-600 underline text-2xl p-2 flex justify-center">Hello {name}</h1>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus adipisci deleniti ex, in dignissimos dolore ducimus doloremque id ipsa dicta consectetur hic, corrupti consequatur. Porro enim perferendis quis praesentium amet!</p>
    </div>
    </div>
  );
}

export default App;
