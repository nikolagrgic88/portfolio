const Button = (props) => {
	return (
		<button
			type={props.type}
			onClick={props.onClick}
			className='mx-4 my-2 py-1 px-5 min-w-fit rounded-full bg-crimson hover:bg-crimson-light hover:scale-105  transition-transform'
		>
			{props.children}
		</button>
	);
};
export default Button;
