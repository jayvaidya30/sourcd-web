export const TagsBadge = ({text} :{text: string}) => {

    return <button className="max-w-24 max-h-8 cursor-pointer flex justify-center items-center text-[15px] py-2 px-2 bg-neutral-600 border-neutral-400 border rounded-lg shadow-lg text-shadow-md tracking-wide">
        {text}
    </button>
}