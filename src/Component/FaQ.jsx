import { useState } from "react";

const faqData = [
    { id: 1, question: "Apa itu Sneakers Shop?", answer: "Sneakers Shop adalah toko yang menyediakan berbagai jenis sepatu sneakers dari berbagai merek ternama." },
    { id: 2, question: "Apakah semua produk di Sneakers Shop original?", answer: "Ya, semua produk yang kami jual adalah 100% original dan berasal dari distributor resmi." },
    { id: 3, question: "Bagaimana cara memesan sepatu di Sneakers Shop?", answer: "Anda dapat memesan langsung melalui website kami dengan menambahkan produk ke keranjang dan mengikuti langkah-langkah checkout." },
    { id: 4, question: "Apakah tersedia layanan pengembalian barang?", answer: "Ya, kami menyediakan layanan pengembalian barang dalam waktu 7 hari setelah barang diterima, dengan syarat barang dalam kondisi asli dan belum dipakai." },
    { id: 5, question: "Apakah Sneakers Shop menyediakan berbagai ukuran?", answer: "Ya, kami menyediakan berbagai ukuran sepatu. Anda dapat melihat panduan ukuran di setiap halaman produk." },
    { id: 6, question: "Berapa lama waktu pengiriman sepatu?", answer: "Waktu pengiriman tergantung lokasi Anda, biasanya antara 2-5 hari kerja." },
    { id: 7, question: "Apakah Sneakers Shop menawarkan diskon atau promo?", answer: "Ya, kami sering mengadakan promo dan diskon. Anda dapat mengikuti media sosial kami untuk mendapatkan informasi terbaru." },
    { id: 8, question: "Bagaimana cara merawat sneakers agar tetap awet?", answer: "Gunakan sikat lembut untuk membersihkan sepatu, hindari pencucian dengan mesin, dan simpan di tempat yang kering." }
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="faq px-4 pb-10 ">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex flex-col justify-center items-center text-center mb-10">
                        <button className="px-7 py-2 rounded-full bg-[#003092] text-white text-sm mb-4 uppercase mt-8">
                            FAQ
                        </button>
                        <h1 className="text-white text-xl md:text-3xl">Pertanyaan yang Sering Diajukan</h1>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {faqData.map((faq, index) => (
                            <div key={faq.id} className="bg-white border border-[#003092] shadow-lg p-6 rounded-lg">
                                <div
                                    className={`flex justify-between items-center cursor-pointer text-[#003092]`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                                    <button className="text-[#003092] text-xl">{openIndex === index ? "-" : "+"}</button>
                                </div>
                                {openIndex === index && (
                                    <p className="text-gray-700 mt-4">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Faq;
