export default function PaymentCancelled() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-50 to-red-100 px-6 py-12">
            <div className="bg-white shadow-2xl rounded-2xl p-8 sm:p-12 max-w-md text-center">
                <div className="flex justify-center mb-6">
                    <div className="bg-red-100 p-4 rounded-full">
                        <svg
                            className="w-12 h-12 text-red-600"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                    Payment Cancelled
                </h1>
                <p className="text-gray-600">
                    The transaction was not completed. If this was unintentional, please try again by click proceeding.
                </p>
            </div>
        </div>
    );
}
