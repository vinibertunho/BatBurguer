const variantClasses = {
	primary: 'border border-[#ECC94B] bg-[#ECC94B] text-slate-950 hover:bg-[#d9b63f]',
	outline: 'border border-slate-500 bg-transparent text-slate-100 hover:border-[#ECC94B] hover:text-[#ECC94B]',
}

function Button({ children, variant = 'primary', className = '', ...props }) {
	const selectedVariant = variantClasses[variant] ?? variantClasses.primary

	return (
		<button
			type="button"
			className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-bold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-[#ECC94B] focus:ring-offset-2 focus:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-50 ${selectedVariant} ${className}`}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
