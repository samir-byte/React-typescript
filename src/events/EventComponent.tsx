const EventComponent: React.FC = () => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event)
    }

    return <div>
        <input onChange={handleChange} />
        <div draggable onDragStart={handleDrag}>
            Drage Me!
        </div>
    </div>
}

export default EventComponent