export const openWhatsApp = (profile:any) => {
    const message = encodeURIComponent(
      "Hola, quiero más información sobre tus servicios."
    );

    const cleanPhone = profile.phone.replace(/\D/g, "");

    window.open(`https://wa.me/${cleanPhone}?text=${message}`, "_blank");
  };
