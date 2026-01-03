import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'trustpulse',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './trustpulse.html',
  styleUrl: './trustpulse.css',
})
export class Trustpulse {
  value = 396;
  term = 30;
  started = false;
  running = false;

  logs: string[] = [];

  script = [
    '[01] SyncLayer::INIT_MULTI_SIG() ................ OK',
    '[02] EntropySeed::derive( vault_id=0xA9F2 ) ...... 0x7e91c4ab09f3d2e1',
    '[03] KeyRing::map_signers( 3-of-5 ) .............. RESOLVED',
    '[04] Curve25519::session_key() ................... READY',
    '',
    '[05] CustodyGrid::lock_state( VAULT#0031 ) ....... SEALED',
    '[06] MerkleRoot::compute() ....................... 0x4f9a7b21cdd8e09c',
    '[07] SHA3_HashSeal::commit() ..................... TRUE',
    '[08] QRM_NodeState[EU-NODE-07] ................... SYNCED (latency 23ms)',
    '',
    '[09] AI_PolicyEngine::load_profile() ............. PROFILE_ID: STRAT-ALPHA-07',
    '[10] AI_RiskVector::recalculate() ................ SCORE: 0.983 (LOW RISK)',
    '[11] YieldRouter::bind_curve() ................... ROUTE: SAFE-ARC-3',
    '',
    '[SIGN-REF] BX-4927-88A1-5C09 | HASH: 0x9b3e0ffad2c17a90',
    '[SIGN-STATUS] VALID | MODE: AI-AUTONOMOUS | MULTISIG: 3/5',
    '',
    '[12] BlockAnchor::bind_height() .................. L2-HEIGHT: 8,392,771',
    '[13] NonceMixer::shuffle() ....................... seed=0x3a9f, mix=0x77d1',
    '[14] AuditTrail::append_entry() .................. EVENT: CUSTODY_ACTIVATED',
    '[15] Telemetry::emit() ........................... OK (channel: secure-bus-01)',
  ];

  get computedRate() {
    return (this.value * 3.34).toFixed(2);
  }

  startCustody() {
    this.started = true;  // ⬅️ STEP 1 ẨN, STEP 2 HIỆN 
    this.running = true;
    this.logs = [];

    let i = 0;
    const timer = setInterval(() => {
      this.logs.push(this.script[i]);
      i++;

      if (i >= this.script.length) {
        clearInterval(timer);
        this.running = false;
      }
    }, 400);
  }
}
