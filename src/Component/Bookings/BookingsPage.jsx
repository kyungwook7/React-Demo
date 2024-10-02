import WeekPicker from "./WeekPicker.jsx";

function BookingsPage() {
    return (
        <main className="Bookings-Page">
            <div>예약하기</div>
            {/*<WeekPicker date="" day="" month=""/>
                WeekPicker 에서 받을 값이 3개 -> 함수에서 props 변수 로 받거나
                또는 오브젝트 분해하여 {date,day,month}
            */}
            {/* WeekPicker 에게 초기값으로 date 속성을 전달한다.*/}
            <WeekPicker date={new Date()}/>
        </main>
    )
}

export default BookingsPage