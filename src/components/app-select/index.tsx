import Select, {Props} from "react-select";

export const AppSelect = (props: Props<{value: string; label: string}, true>) => {


	return <Select
			isSearchable={false}
			styles={{
				// @ts-ignore
		control: (base) => ({...base, padding: "15px", borderRadius: 15})
	}} {...props}/>
}