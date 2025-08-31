export default function Contact() {
    return (
        <div className="w-full h-screen  p-6 sm:p-8 bg-gray-200 rounded-lg shadow-md mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                Contact <span className="text-red-500">Me!</span>
            </h2>

            <form className="space-y-6 sm:px-20">
                {/* Row 1: First Name, Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="First name"
                        className="border-2 border-red-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                    <input
                        type="text"
                        placeholder="Last name"
                        className="border-2 border-red-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                </div>

                {/* Row 2: Phone Number, Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                        type="tel"
                        placeholder="Phone number"
                        className="border-2 border-red-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="border-2 border-red-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                </div>

                {/* Message Textarea */}
                <textarea
                    rows={8}
                    placeholder="Your message..."
                    className="border-2 border-red-300 rounded-md px-3 py-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-red-400"
                ></textarea>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-red-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-red-600 transition"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
}
