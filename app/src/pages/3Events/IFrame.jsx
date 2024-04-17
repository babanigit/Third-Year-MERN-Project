const IFrame = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d543.8811544577866!2d72.82295317371685!3d19.432668319847966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9a4728e0d8d%3A0xc21a5a2dcc2371b5!2z4KSq4KSW4KS14KS-4KScIOCkouCli-CksuCkleCkvyDgpJXgpY3gpLLgpL7gpLggKEJNSSk!5e1!3m2!1sen!2sin!4v1713333198391!5m2!1sen!2sin"
        width="85%"
        height="85%"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className=" rounded-2xl border-2"
      ></iframe>
    </>
  );
};

export default IFrame;
