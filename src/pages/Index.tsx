
import Header from "@/components/Header";
import PhotoGallery from "@/components/PhotoGallery";
import Timeline from "@/components/Timeline";
import SpecialMessage from "@/components/SpecialMessage";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <PhotoGallery />
      <Timeline />
      <SpecialMessage />
      <Footer />
    </div>
  );
};

export default Index;
