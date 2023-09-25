export default function contactForm() {
    return (
        <div className='container mt-4'>
          <div className="row">
            <form action="/action_page.php" className="col-6">
              <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="text" className="nameInput form-control" id="name" name="userName" placeholder="Enter your Name"></input>
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input type="text" className="form-control" id="email" name="userEmail" placeholder="Enter your Email"></input>
              </div>
              <div className="mb-3">
                <label for="message" className="form-label">Message</label>
                <textarea id="message" className="form-control" name="userMessage" placeholder="Write something.."></textarea>
                <input type="submit" className="mt-3" value="Submit"></input>
              </div>
            </form>
        </div>
      </div>
    );
}