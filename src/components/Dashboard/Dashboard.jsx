import "../Dashboard/Dashboard.css";

const Dashboard = ({ user }) => {
  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome, {user.username}</h1>
        <p>Your personal rental management hub.</p>
      </header>
      <section className="dashboard-description">
        <h2>About Our Rental Flat System</h2>
        <p>
          Our rental flat system is designed to simplify the process of finding
          and managing rental properties. As a user, you can easily browse
          through a wide selection of flats, view detailed information, and even
          book your desired accommodation with just a few clicks.
        </p>
        <p>
          With our user-friendly platform, you can manage your rental properties
          effortlessly. From updating property details to monitoring booking
          status, everything is right at your fingertips.
        </p>
        <p>
          Whether you're a landlord looking to list your available flats or a
          tenant seeking the perfect rental, our system provides a seamless and
          efficient experience. Start exploring our extensive property listings
          and discover your ideal rental flat today!
        </p>
      </section>
    </main>
  );
};

export default Dashboard;
