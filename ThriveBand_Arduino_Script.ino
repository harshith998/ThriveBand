//importing libraries
#include <LiquidCrystal_I2C.h>
#include <Wire.h>
#include <SparkFunLSM9DS0.h>
#include <Electrolyte_model.h>


// Interface
const int BUTTON_RUNNING = 12;
const int BUTTON_WORKOUT = 11;
const int SWITCH_CONFIG_MODE = 10;
const int ANALOG_POT_RUNNING_DIST = 0;

float running_dist
float ratio
float baselinePace

// Feedback
const int SOUND = 2;
const int LED_RUNNING = 8;
const int LED_WORKOUT = 7;
const int LED_CONFIG_MODE = 6;
LiquidCrystal_I2C lcd(0x27, 16, 2);

// Sensors
LSM9DS0 imu;

const int ANALOG_WATER_SENSOR = 1;

bool config = false;
unsigned int running_dist = 10;
int mode = 0;

unsigned long repStartTime = 0;
unsigned long lastRepTime = 0;
int repCount = 0;

void setup() {
  //begin serial connection and pins
  Serial.begin(9600)
 
  pinMode(BUTTON_RUNNING, INPUT);
  pinMode(BUTTON_WORKOUT, INPUT);
  pinMode(SWITCH_CONFIG_MODE, INPUT);
  pinMode(ANALOG_POT_RUNNING_DIST, INPUT);

  pinMode(LED_RUNNING, OUTPUT);
  pinMode(LED_WORKOUT, INPUT);
  pinMode(LED_CONFIG_MODE, INPUT);
 
  pinMode(ANALOG_WATER_SENSOR, INPUT);

  pinMode(SOUND, OUTPUT);

  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);

  imu.begin();
  imu.calibrate();
  sendFeedback();
}



void loop() {
 
  //calling functions to main loop
  if (checkForInput()) {
    sendFeedback();
  }
  //model and sensor impact liklihood of cramp prediction
  int sweat_meter = (int(analogRead(ANALOG_WATER_SENSOR)));
  float input_data[] = { int(analogRead(ANALOG_WATER_SENSOR))};
  Electrolyte_model(input_data, output_data);
  if((sweat_meter >= 200) and (prediction>=200)) mode = 5;
 
  //calling other functions
  if (mode == 1 && config) {
    // Run config mode logic
    measureBaselinePace();
  } else if (mode == 1 && !config) {
    // Run normal mode logic
    checkCurrentPace();
  } else if (mode == 2 && config) {
    // Workout config mode logic
    measureRepsAndTime();
  } else if (mode == 2 && !config) {
    // Workout normal mode logic
    measureRepsAndTime();
  }
}

//baseline run
void measureBaselinePace() {
  unsigned long startTime = millis();
  float lastX = imu.readAccelX();
  float lastY = imu.readAccelY();
  float lastZ = imu.readAccelZ();
  unsigned long lastMoveTime = millis();
 
  float baselineDistance = 0;
  float baselinePace = 0;

  while (true) {
    unsigned long currentTime = millis();
    if (currentTime - lastMoveTime > 10000) {
      // No movement detected for 10 seconds, stop measuring
      break;
    }

    float currentX = imu.readAccelX();
    float currentY = imu.readAccelY();
    float currentZ = imu.readAccelZ();

    // Calculate distance moved using accelerometer data
    float deltaX = currentX - lastX;
    float deltaY = currentY - lastY;
    float deltaZ = currentZ - lastZ;

    float distanceMoved = sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);
    baselineDistance += distanceMoved;

    // Update last move time if movement is detected
    if (abs(deltaX) > 0.1 || abs(deltaY) > 0.1 || abs(deltaZ) > 0.1) {
      lastMoveTime = currentTime;
    }

    // Update last accelerometer readings
    lastX = currentX;
    lastY = currentY;
    lastZ = currentZ;
  }

  // Calculate baseline pace
  unsigned long elapsedTime = millis() - startTime;
  baselinePace = baselineDistance / elapsedTime;

  // Now calculate new pace
  newDistance = running_dist; // You should replace this with your logic to get the new distance
  ratio = baselineDistance / newDistance;

}

void checkCurrentPace() {
  float newPace = baselinePace * ratio;
 
  while (true) {
    unsigned long currentTime = millis();
    if (currentTime - lastMoveTime > 10000) {
      // No movement detected for 10 seconds, stop measuring
      break;
    }

    float currentX = imu.readAccelX();
    float currentY = imu.readAccelY();
    float currentZ = imu.readAccelZ();

    // Calculate distance moved using accelerometer data
    float deltaX = currentX - lastX;
    float deltaY = currentY - lastY;
    float deltaZ = currentZ - lastZ;

    float distanceMoved = sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);
    baselineDistance += distanceMoved;

    // Update last move time if movement is detected
    if (abs(deltaX) > 0.1 || abs(deltaY) > 0.1 || abs(deltaZ) > 0.1) {
      lastMoveTime = currentTime;
    }

    // Update last accelerometer readings
    lastX = currentX;
    lastY = currentY;
    lastZ = currentZ;
  }
  baselinePace = baselineDistance / elapsedTime;
  if (baselinePace > (.9*newPace) or baselinePace < (1.1*newPace)){
    beep(10)
  }
  // Compare current speed with new pace
  // Beep piezo buzzer if current speed isn't within a 10% margin of new pace
}

void measureBaselineRepsAndTime() {
  // Reset rep count and timer
  repCount = 0;
  repStartTime = millis();
  lastRepTime = millis();

  bool startDetected = false;
  bool returnDetected = false;

  float initialAccelY = imu.readAccelY();
  float threshold = 1.0; // Adjust threshold based on your gyroscope sensitivity

  while (true) {
    // Read gyroscope data
    float currentAccelY = imu.readAccelY();

    // Check for start position
    if (!startDetected && currentAccelY - initialAccelY > threshold) {
      startDetected = true;
    }

    // Check for return position
    if (startDetected && currentAccelY - initialAccelY < -threshold) {
      returnDetected = true;
    }

    // Check for complete rep
    if (startDetected && returnDetected) {
      repCount++;
      lastRepTime = millis();
      startDetected = false;
      returnDetected = false;
    }

    // Check for 10 seconds of inactivity
    if (millis() - lastRepTime > 10000) {
      break;
    }
  }

}

void measureRepsAndTime() {
  // Reset rep count and timer
  repCount = 0;
  repStartTime = millis();
  lastRepTime = millis();

  bool startDetected = false;
  bool returnDetected = false;

  float initialAccelY = imu.readAccelY();
  float threshold = 1.0; // Adjust threshold based on your gyroscope sensitivity

  while (true) {
    // Read gyroscope data
    float currentAccelY = imu.readAccelY();

    // Check for start position
    if (!startDetected && currentAccelY - initialAccelY > threshold) {
      startDetected = true;
    }

    // Check for return position
    if (startDetected && currentAccelY - initialAccelY < -threshold) {
      returnDetected = true;
    }

    // Check for complete rep
    if (startDetected && returnDetected) {
      repCount++;
      lastRepTime = millis();
      startDetected = false;
      returnDetected = false;
    }

    // Check for 10 seconds of inactivity
    if (millis() - lastRepTime > 10000) {
      break;
    }
  }

  // Beep the piezo buzzer if reps are below baseline reps or time is above baseline time
  if (repCount < baselineRepCount || millis() - repStartTime > baselineTime) {
    digitalWrite(SOUND, HIGH);
    delay(500); // Beep duration
    digitalWrite(SOUND, LOW);
  }
}



bool checkForInput(){
  bool state_change_detected = false;
  if(mode == 5) state_change_detected = true;
  if(digitalRead(BUTTON_RUNNING)){
    state_change_detected = mode != 1;
    mode = 1;
   
  } else if(digitalRead(BUTTON_WORKOUT)){
    state_change_detected = mode != 2;
    mode = 2;
  } else if(digitalRead(SWITCH_CONFIG_MODE)){
    state_change_detected = !config; // config=true; false.. config=false; true
    config = true;
  } else {
    state_change_detected = config;
    config = false;
  }

  int pot_inpt = int(analogRead(ANALOG_POT_RUNNING_DIST))/20;
  if(pot_inpt != running_dist){
    state_change_detected = true;
    running_dist = pot_inpt;
  }



  return state_change_detected;
}

void debug(){
  Serial.println("DEBUG: mode: " + String(mode) + ", config: " + String(config));
}


// update lcd; led's; sound level
void sendFeedback(){
  beep(10);
  Serial.println("\n\n\n\n\n\n\nUPDATE FEEDBACK!!!!\n\n\n\n\n");
  digitalWrite(LED_RUNNING, mode == 1);
  digitalWrite(LED_WORKOUT, mode == 2);
  digitalWrite(LED_CONFIG_MODE, config);

  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("ThriveBand");
  if(mode == 1){
    // maybe cache prev running dist so we don't need to update every time?
    lcd.setCursor(0, 1);
    lcd.print("Running Mode: " + String(running_dist) + " mi.");
  } else if(mode == 2){
    lcd.setCursor(0, 1);
    lcd.print("Workout Mode");
  } else{
    lcd.setCursor(0, 1);
    lcd.print("NO MODE SET");
  } if(mode == 5){
    lcd.setCursor(0, 1);
    lcd.print("YOU ELECTROLYTES");
    beep(2000);
  }
}


//beeping peizo buzzer
void beep(long len){
  digitalWrite(SOUND, HIGH);
  delay(len);
  digitalWrite(SOUND, LOW);
}