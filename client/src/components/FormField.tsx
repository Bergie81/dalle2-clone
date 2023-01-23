import React from "react";

import { FormFieldProps } from "../types/interfaces";

const FormField = ({
	labelName,
	type,
	name,
	placeholder,
	value,
	handleChange,
	isSurpriseMe,
	handleSurpriseMe,
}: FormFieldProps) => {
	return (
		<div>
			<div className="flex items-center gap-2 mb-2">
				<label className="block text-sm font-medium text-dark" htmlFor={name}>
					{labelName}
				</label>
			</div>
			<div className="flex flex-col sm:flex-row gap-2">
				<input
					type={type}
					id={name}
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={handleChange}
					required
					className="bg-white border border-gray-300 text-dark text-sm rounded-lg focus:ring-secondary focus:border-secondary outline-none block w-full p-3"
				/>

				{isSurpriseMe && (
					<button
						type="button"
						onClick={handleSurpriseMe}
						className="font-semibold text-xs bg-white py-1 px-2 rounded-md w-28 h-12 sm:h-auto sm:min-w-[100px] hover:bg-primary hover:text-white text-dark"
					>
						Surprise Me
					</button>
				)}
			</div>
		</div>
	);
};

export default FormField;
