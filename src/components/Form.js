


export default function Form({ children, classesName, ...rest }) {
    return (
        <form className={` ${classesName} {classes.form}`} action="#" {...rest}>
            {children}
        </form>
    )
}