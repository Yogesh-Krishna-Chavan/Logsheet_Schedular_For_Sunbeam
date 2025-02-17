export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl mb-4">Login</h2>
            <input type="text" placeholder="Username" className="border p-2 mb-2" />
            <input type="password" placeholder="Password" className="border p-2 mb-2" />
            <button className="bg-blue-500 text-white p-2">Login</button>
        </div>
    );
}