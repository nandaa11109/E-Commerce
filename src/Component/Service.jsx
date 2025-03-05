const Service = () => {
    return (
        <>
            <div className="mt-20 bg-[#003092] w-full pb-16">
                <div className="pt-10 text-center">
                    <h1 className="text-white text-2xl font-medium">
                        Apa Kata Pelanggan Kami?
                    </h1>
                    <p className="text-gray-300 mt-2">
                        Testimoni dari pelanggan yang telah merasakan kualitas produk kami.
                    </p>
                </div>
                <div className="max-w-5xl mx-auto mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="w-full text-center bg-gray-100 p-6 shadow-md rounded-lg">
                            <p className="mb-5 text-yellow-500 text-xl">⭐⭐⭐⭐⭐</p>
                            <p className="mb-5">
                                "Sepatu yang saya beli sangat nyaman dan berkualitas! Cocok untuk aktivitas sehari-hari."
                            </p>
                            <p className="font-semibold">- No Name</p>
                        </div>
                        <div className="w-full text-center bg-gray-100 p-6 shadow-md rounded-lg">
                            <p className="mb-5 text-yellow-500 text-xl">⭐⭐⭐⭐⭐</p>
                            <p className="mb-5">
                                "Pelayanan cepat dan produk sesuai dengan deskripsi. Desainnya stylish dan modern."
                            </p>
                            <p className="font-semibold">- No Name</p>
                        </div>
                        <div className="w-full text-center bg-gray-100 p-6 shadow-md rounded-lg">
                            <p className="mb-5 text-yellow-500 text-xl">⭐⭐⭐⭐⭐</p>
                            <p className="mb-5">
                                "Harga sebanding dengan kualitasnya! Sudah beli dua kali di sini dan selalu puas."
                            </p>
                            <p className="font-semibold">- No Name</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;
