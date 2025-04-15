"use client";

export default function productaddform() {
    const handedesubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div>
            <form onSubmit={handelsubmit}>

                <input type="text" placeholder='NAME' />
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}
