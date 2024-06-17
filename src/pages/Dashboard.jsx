import AddTour from "../components/Dashboard/AddTour";
import BookingDashboard from "./BookingDashboard";
import VolunterAcceptance from "./VolunterAcceptance";
function Dashboard() {
    return (
        <div>
            <AddTour />
            <div className="px-12 bg-gray-100 h-">
                <BookingDashboard />
            </div>
            <div className="px-12 bg-gray-100 h-">
                <VolunterAcceptance />
            </div>
        </div>
    );
}

export default Dashboard;
