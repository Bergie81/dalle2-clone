export interface Post {
	_id: string;
	name: string;
	prompt: string;
	image: string;
}

export interface Posts {
	title: string;
	data: [Post] | [];
}

export interface FormFieldProps {
	labelName: string;
	type: string;
	name: string;
	placeholder: string;
	value: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isSurpriseMe?: boolean;
	handleSurpriseMe?: () => void;
}
