export const Wrapper = ({ children}: {children: React.ReactNode}) => {
    return (
        <div className="px-32 pt-6">
            {children}
        </div>
    )
}