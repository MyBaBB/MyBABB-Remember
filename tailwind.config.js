/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      varDARKBEAKTOP:        "#785001",  
      varMEDBEAKTOP:         "#b67902", 
      varLIGHTBEAKTOP:       "#fca802", 
    
      varDARKDUCKHEAD:       "#1e3b28",       
      varMEDDUCKHEAD:        "#284f35",    
      varLIGHTDUCKHEAD:      "#528f85", 
      
      varDARKBLUEFEATHER:    "#24558d",  
      varMEDBLUEFEATHER:     "#2a61a1",  
      varLIGHTBLUEFEATHER:   "#419aff", 
      
      varDARKDUCKCHEEKS:     "#362e47", 
      varMEDDUCKCHEEKS:      "#6b5b8d", 
      varLIGHTDUCKCHEEKS:    "#a088d2",
      
      varDARKNECK:           "#412a32",  
      varMEDNECK:            "#98648d", 
      varLIGHTNECK:          "#c68199", 
     
      varDARKWING:           "#3c302e", 
      varMEDWING:            "#806661", 
      varLIGHTWING:          "#cfa69d", 
    
      varDARKBEAK:           "#70181a", 
      varMEDBEAK:            "#962023",
      varLIGHTBEAK:          "#d72d32", 
    
      varDARKSPACE:          "#08121c", 
      varMEDSPACE:           "#1b3854", 
      varLIGHTSPACE:         "#264d73", 
    },
  },
  screens: {
    'xxs': '320px',
    'xs': '420px',
    'sm': '460px',
    'md': '685px',
    'lg': '1024px',
    'xl': '1280px',
  },
  
  plugins: [],
}
}
