import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utility/addToDB";

const BookDetail = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId)

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id)

    const {bookId: currentBookId, image} = book;

    const handleMarkAsRead = (id) => {
        addToStoredReadList(id);
    }

    return (
        <div className="my-12">
            <h2>Book details: {currentBookId}</h2>
            <img src={image} alt="" className="w-36"/>
            <button className="btn btn-outline mr-4 btn-accent" onClick={() => handleMarkAsRead(bookId)}>Mark as Read</button>
            <button className="btn btn-accent">Add to Wishlist</button>
        </div>
    );
};

export default BookDetail;