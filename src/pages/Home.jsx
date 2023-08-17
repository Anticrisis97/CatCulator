export default function Home() {
    return <div>
        <h1 className="welcome-msg-title">Welcome to CatCulator!</h1>
        <div className="welcome-msg-container">
        <p>Here, You can review our database of cat food organised</p>
           <p>by quality that would best fit your pet's needs!</p>
        <p>Given that our database does not list the food you are
            looking for,</p>
            <p>feel free to use our <span className="bold">CatCulator</span> to check the quality of the product</p>
                <p>by inputting the nutrition values.</p>
        </div>
    </div>
}