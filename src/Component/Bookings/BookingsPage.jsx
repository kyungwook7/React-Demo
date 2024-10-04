import BookablesList from "../Bookables/BookablesList.jsx";
import {useState} from "react";

function BookingsPage() {
    const [bookable, setBookable] = useState(null)

    return (
        <main className="Bookings-Page">
            <BookablesList
                bookable={bookable}
                setBookable={setBookable}/>
            {/* BookablesList 선택한 bookable 객체는 부모, 형제 */}
            <Bookings
                bookable={bookable}/>
        </main>
    )
}

export default BookingsPage