// eslint-disable-next-line no-unused-vars
import React from "react";

import { useEffect, useState } from "react";
import { generateMiduPass } from "./modules/generatePass";
import { MainSection } from "./components/MainSection";
import { Card } from "./components/Card";
import { Brand } from "./components/Brand";
import { PassField } from "./components/PassField";
import { ToggleSwitch } from "./components//ToggleSwitch";
import { PasswordQuality } from "./components/PasswordQuality";
import { PassLengthLabel } from "./components/PassLengthLabel";
import { Slider } from "./components/Slider";
import { PrimaryButton } from "./components/PrimaryButton";
import { TbRefreshAlert } from "react-icons/tb";
import { ToggleLabel } from "./components/ToggleLabel";
import "../src/styles/brand.module.css";

function App() {
  const [password, setPassword] = useState("");
  const [passLength, setPassLength] = useState(23);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const newPass = generateMiduPass(
      passLength,
      lowercase,
      uppercase,
      numbers,
      symbols,
    );
    setPassword(newPass);
  }, [passLength, lowercase, uppercase, numbers, symbols, reload]);

  return (
    <>
      <MainSection>
        <div className="cardWrapper2 mt-8  text-center ">
          <Card>
            <Brand />
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <PassField value={password} setValue={setPassword} />
                <PrimaryButton
                  disabled={!password}
                  handleClick={() => setReload(!reload)}
                >
                  <TbRefreshAlert size={30} />
                </PrimaryButton>
              </div>
              <PasswordQuality length={passLength} min={6} max={66} />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <PassLengthLabel length={passLength} />
                <Slider
                  value={passLength}
                  handleChange={(event) => setPassLength(event.target.value)}
                  min={6}
                  max={32}
                />
              </div>
              <div
                className="flex  items-center justify-between text-left
                             text-[12px] xxs:text-[17px]  xs:text-[22px] "
              >
                <ToggleLabel content="Include lowercase " active={lowercase} />
                <ToggleSwitch
                  active={lowercase}
                  handleClick={() => setLowercase(!lowercase)}
                  disabled={!uppercase && !numbers && !symbols}
                />
              </div>
              <div
                className="flex items-center justify-between text-left 
                    text-[12px] xxs:text-[17px]  xs:text-[22px]   "
              >
                <ToggleLabel content="Include uppercase " active={uppercase} />
                <ToggleSwitch
                  active={uppercase}
                  handleClick={() => setUppercase(!uppercase)}
                  disabled={!lowercase && !numbers && !symbols}
                />
              </div>
              <div
                className="flex items-center justify-between text-left
                             text-[12px] xxs:text-[17px]  xs:text-[22px]"
              >
                <ToggleLabel content="Include numbers" active={numbers} />
                <ToggleSwitch
                  active={numbers}
                  handleClick={() => setNumbers(!numbers)}
                  disabled={!lowercase && !uppercase && !symbols}
                />
              </div>
              <div
                className="flex items-center justify-between text-left
                     text-[12px] xxs:text-[17px]  xs:text-[22px]"
              >
                <ToggleLabel content="Include symbols" active={symbols} />
                <ToggleSwitch
                  active={symbols}
                  handleClick={() => setSymbols(!symbols)}
                  disabled={!lowercase && !uppercase && !numbers}
                />
              </div>
            </div>
          </Card>
          <a href="https://mybabb.com">
            <span className="text-sm text-slate-500">
              Presented by{" "}
              <span className="font-medium text-orange-500 no-underline hover:underline">
                Brett Baker
              </span>
            </span>
          </a>
        </div>
      </MainSection>
    </>
  );
}

export default App;
