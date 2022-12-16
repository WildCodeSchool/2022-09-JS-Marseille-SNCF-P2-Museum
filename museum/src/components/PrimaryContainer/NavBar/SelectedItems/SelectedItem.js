import IsSelectedContext from "../../../../contexts/IsSelectedContext";

function SelectedItems() {
    const {isSelected, setIsSelected} = useContext(IsSelectedContext);
    return(
        <>
        <div>
           Your selected work of art: 
        </div>
        </>
        
    );
}

export default SelectedItems;