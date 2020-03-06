interface Props { }
const Main: React.FC<Props> = (props) => {
    return (
        <main>
            {props.children}
        </main>
    )
};
export default Main