import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId)

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id)

    const {bookId: currentBookId, image} = book;

    return (
        <div className="my-12">
            <h2>Book details: {currentBookId}</h2>
            <img src={image} alt="" className="w-36"/>
            <button className="btn btn-outline mr-4 btn-accent">Read</button>
            <button className="btn btn-accent">Wishlist</button>
        </div>
    );
};

export default BookDetail;