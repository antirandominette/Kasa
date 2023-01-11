import './Tag.css';

function Tag({ tag }) {
    return (
        <div className='tagContainer'>
            <p>{ tag }</p>
        </div>
    );
}

export default Tag;