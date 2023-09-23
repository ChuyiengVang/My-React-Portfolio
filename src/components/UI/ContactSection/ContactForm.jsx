export default function contactForm() {
    return (
        <div className='container'>
        <form action="/action_page.php">
          <label for="name">Name</label><br></br>
          <input type="text" id="name" name="userName" placeholder="Enter your Name"></input><br></br>
          <label for="email">Email</label><br></br>
          <input type="text" id="email" name="userEmail" placeholder="Enter your Email"></input><br></br>
          <label for="message">Message</label><br></br>
          <textarea id="message" name="userMessage" placeholder="Write something.."></textarea><br></br>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
}