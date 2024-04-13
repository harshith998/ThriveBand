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
  float newDistance = /* calculate new distance */; // You should replace this with your logic to get the new distance
  float ratio = baselineDistance / newDistance;
  float newPace = baselinePace * ratio;
}

void checkCurrentPace() {
  // Run normal mode logic
  // Read accelerometer data to calculate current speed
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

  // Calculate baseline reps and time
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

  // Store the new rep count and time
}